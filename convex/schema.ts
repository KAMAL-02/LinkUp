import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
		name: v.optional(v.string()),
		email: v.string(),
		image: v.string(),
		tokenIdentifier: v.string(),
		isOnline: v.boolean(),
	}).index("by_tokenIdentifier", ["tokenIdentifier"]),

	conversations: defineTable({
		participants: v.array(v.id("users")),
		isGroup: v.boolean(),
		groupName: v.optional(v.string()),
		groupImage: v.optional(v.string()),
		admin: v.optional(v.id("users")),
	}),

	messages: defineTable({
		conversation: v.id("conversations"),
		sender: v.string(), //it could be id but we using string so that it doesnt throw error during AI integration
		content: v.string(),
		messageType: v.union(v.literal("text"), v.literal("image"), v.literal("video")),
	}).index("by_conversation", ["conversation"]),
});