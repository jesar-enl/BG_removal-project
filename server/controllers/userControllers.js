import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // const webhook = new Webhook({ secret: process.env.CLERK_WEBHOOK_SECRET });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
    
  }
};

export { clerkWebhooks };