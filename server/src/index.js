/* eslint-disable import/no-anonymous-default-export */
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/* eslint-disable import/no-anonymous-default-export */
/**
 * Cloudflare Worker for voting system
 */

export default {
	async fetch(request, env, ctx) {
		// Handling CORS for preflight and actual requests
		const corsHeaders = {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Max-Age": "86400",
		};

		// If the request method is OPTIONS (pre-flight request), return early with CORS headers
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: corsHeaders,
			});
		}

		// For POST request
		if (request.method === "POST" && request.url.endsWith("/api/vote")) {
			// const env.DB = env.DB;
			const requestBody = await request.json();
			const { candidateId } = requestBody;

			// Validate input
			if (!candidateId) {
				return new Response(
					JSON.stringify({ message: "Candidate ID and name are required" }),
					{ status: 400, headers: corsHeaders }
				);
			}

			try {
				// Check if user has already voted (look for existing user in D1)
				//   const existingUser = await env.DB.prepare(
				// 	"SELECT * FROM users WHERE name = ?"
				//   )
				// 	.bind(name)
				// 	.first();

				//   if (existingUser) {
				// 	return new Response(
				// 	  JSON.stringify({ message: "User has already voted" }),
				// 	  { status: 400, headers: corsHeaders }
				// 	);
				//   }

				// Check if candidate exists
				const candidate = await env.DB.prepare(
					"SELECT * FROM candidates WHERE id = ?"
				)
					.bind(candidateId)
					.first();

				if (!candidate) {
					return new Response(
						JSON.stringify({ message: "Invalid candidate ID" }),
						{ status: 400, headers: corsHeaders }
					);
				}

				// Increment candidate vote
				await env.DB.prepare(
					"UPDATE candidates SET votes = votes + 1 WHERE id = ?"
				)
					.bind(candidateId)
					.run();

				// Insert new user who voted
				// await env.DB.prepare(
				// 	"INSERT INTO users(name, voted_candidate_id) VALUES(?, ?)"
				// )
				// 	.bind(name, candidateId)
				// 	.run();

				return new Response(
					JSON.stringify({ message: "Vote recorded successfully" }),
					{ status: 200, headers: corsHeaders }
				);
			} catch (error) {
				console.error(error);
				return new Response(
					JSON.stringify({ message: "Server error" }),
					{ status: 500, headers: corsHeaders }
				);
			}
		}

		return new Response("Not Found", { status: 404 });
	},
};

