import type { Context } from 'hono';
import * as userModel from '../models/user.model.js';
import { getKeysById } from '../models/key.model.js';

interface SignupRequestBody {
  username: string;
  password: string;
}

interface LoginRequestBody {
  username: string;
  password: string;
}

const handleSignup = async (c: Context) => {
  try {
    const body = await c.req.json<SignupRequestBody>();
    if (!body.username || !body.password) {
      return c.json({ success: false, msg: 'Missing username or password' }, 400);
    }

    const user = await userModel.createUser(body.username, body.password);
    return c.json({
      success: true,
      data: { id: user.id, username: user.username },
      msg: 'User created successfully',
    }, 201);
  } catch (e) {
    if (e instanceof Error && e.message.includes('already exists')) {
      return c.json({ success: false, msg: 'Username already exists' }, 409);
    }
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

const handleLogin = async (c: Context) => {
  try {
    const body = await c.req.json<LoginRequestBody>();
    if (!body.username || !body.password) {
      return c.json({ success: false, msg: 'Missing username or password' }, 400);
    }

    const user = await userModel.findUserByUsername(body.username);
    if (!user) {
      return c.json({ success: false, msg: '🚫 User not found' }, 404);
    }

    const isPasswordValid = await userModel.comparePassword(body.password, user.password);
    if (!isPasswordValid) {
      return c.json({ success: false, msg: '❌ Invalid password' }, 401);
    }

    const totalQuantity = await userModel.getTotalItemQuantity(body.username);

    return c.json({
      success: true,
      data: {
        id: user.id,
        username: user.username,
        coin: user.coin,
        totalItems: totalQuantity ?? 0,
      },
      msg: 'Login successful',
    });
  } catch (e) {
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

const handleDeleteAccount = async (c: Context) => {
  try {
    const username = c.req.param('username');
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return c.json({ success: false, msg: 'User not found' }, 404);
    }

    const deleted = await userModel.deleteUserById(user.id);
    return c.json({ success: true, data: deleted, msg: 'Account deleted successfully' });
  } catch (e) {
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

const getUserKeys = async (c: Context) => {
  const userId = 1;
  const keys = await getKeysById(userId);
  return c.json(keys);
};


const uploadUserImages = async (c: Context) => {
  try {
    const body = await c.req.parseBody();

    const username = body.username;
    const profilePicFile = body.profilePic;
    const backgroundImageFile = body.backgroundImage;

    if (!username || typeof username !== 'string') {
      return c.json({ success: false, msg: 'Missing or invalid username' }, 400);
    }

    const result = await userModel.handleUserImageUpload(
      username,
      profilePicFile instanceof File ? profilePicFile : undefined,
      backgroundImageFile instanceof File ? backgroundImageFile : undefined
    );

    return c.json(result);
  } catch (err) {
    console.error(err);
    return c.json({ success: false, data: null, msg: 'Upload failed' }, 500);
  }
};
const getUserProfile = async (c: Context) => {
  try {
    const username = c.req.param('username');

    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return c.json({ success: false, msg: 'User not found' }, 404);
    }

    const inventory = await userModel.getUserInventory(username);
    const profile = await userModel.getUserPicByUsername(username);

    return c.json({
      success: true,
      data: {
        username: user.username,
        coin: user.coin,
        profilePic: profile?.profilePic || '',
        backgroundImage: profile?.backgroundImage || '',
        inventory,
      },
    });
  } catch (e) {
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

export {
  handleSignup,
  handleLogin,
  handleDeleteAccount,
  getUserKeys,
  uploadUserImages,
  getUserProfile,
};
