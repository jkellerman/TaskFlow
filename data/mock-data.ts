import { sixMonthsLater, today, tomorrow } from "@/lib/formatter";

export const generateMockData = () => {
	return {
		boards: [
			{
				name: "Platform Launch",
				status: [
					{
						color: "#43D6F6",
						name: "Todo",
						tasks: [
							{
								title: "Build UI for onboarding flow",
								description: "",
								"due date": today,
								labels: ["development"],
								status: "Todo",
								subtasks: [
									{
										title: "Sign up page",
										isCompleted: true,
									},
									{
										title: "Sign in page",
										isCompleted: false,
									},
									{
										title: "Welcome page",
										isCompleted: false,
									},
								],
							},
							{
								title: "Build UI for search",
								description: "",
								"due date": tomorrow,
								labels: ["development"],
								status: "Todo",
								subtasks: [
									{
										title: "Search page",
										isCompleted: false,
									},
								],
							},
							{
								title: "Conduct 5 wireframe tests",
								description:
									"Ensure the layout continues to make sense and we have strong buy-in from potential users.",
								"due date": "2024-10-08",
								labels: ["testing"],
								status: "Todo",
								subtasks: [
									{
										title: "Complete 5 wireframe prototype tests",
										isCompleted: true,
									},
								],
							},
						],
					},
					{
						color: "#A78BF4",
						name: "Doing",
						tasks: [
							{
								title: "Design settings and search pages",
								description: "",
								"due date": "2024-10-08",
								labels: ["ui design"],
								status: "Doing",
								subtasks: [
									{
										title: "Settings - Account page",
										isCompleted: true,
									},
									{
										title: "Settings - Billing page",
										isCompleted: true,
									},
									{
										title: "Search page",
										isCompleted: false,
									},
								],
							},
							{
								title: "Add authentication endpoints",
								description: "",
								"due date": "2024-11-26",
								labels: ["development"],
								status: "Doing",
								subtasks: [
									{
										title: "Define user model",
										isCompleted: true,
									},
									{
										title: "Add auth endpoints",
										isCompleted: false,
									},
								],
							},
						],
					},
					{
						color: "#FFBE3E",
						name: "In Review",
						tasks: [
							{
								title: "Research pricing points of various competitors and trial different business models",
								description:
									"We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
								"due date": "2025-07-26",
								labels: ["research"],
								status: "In Review",
								subtasks: [
									{
										title: "Research competitor pricing and business models",
										isCompleted: true,
									},
									{
										title: "Outline a business model that works for our solution",
										isCompleted: false,
									},
									{
										title: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
										isCompleted: false,
									},
								],
							},
							{
								title: "QA and test all major user journeys",
								description:
									"Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
								"due date": sixMonthsLater,
								labels: ["testing"],
								status: "In Review",
								subtasks: [
									{
										title: "Internal testing",
										isCompleted: false,
									},
									{
										title: "External testing",
										isCompleted: false,
									},
								],
							},
						],
					},
					{
						color: "#9CE44A",
						name: "Done",
						tasks: [
							{
								title: "Create wireframe prototype",
								description: "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
								"due date": today,
								labels: ["ui design"],
								status: "Done",
								subtasks: [
									{
										title: "Create clickable wireframe prototype in Balsamiq",
										isCompleted: true,
									},
								],
							},
							{
								title: "Review results of usability tests and iterate",
								description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
								"due date": tomorrow,
								labels: ["testing"],
								status: "Done",
								subtasks: [
									{
										title: "Meet to review notes from previous tests and plan changes",
										isCompleted: true,
									},
									{
										title: "Make changes to paper prototypes",
										isCompleted: true,
									},
									{
										title: "Conduct 5 usability tests",
										isCompleted: true,
									},
								],
							},
							{
								title: "Create paper prototypes and conduct 10 usability tests with potential customers",
								description: "",
								"due date": tomorrow,
								labels: ["testing"],
								status: "Done",
								subtasks: [
									{
										title: "Create paper prototypes for version one",
										isCompleted: true,
									},
									{
										title: "Complete 10 usability tests",
										isCompleted: true,
									},
								],
							},
							{
								title: "Market discovery",
								description:
									"We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
								"due date": today,
								labels: ["research"],
								status: "Done",
								subtasks: [
									{
										title: "Interview 10 prospective customers",
										isCompleted: true,
									},
								],
							},
							{
								title: "Competitor analysis",
								description: "",
								"due date": "2024-10-08",
								labels: ["research"],
								status: "Done",
								subtasks: [
									{
										title: "Find direct and indirect competitors",
										isCompleted: true,
									},
									{
										title: "SWOT analysis for each competitor",
										isCompleted: true,
									},
								],
							},
							{
								title: "Research the market",
								description:
									"We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
								"due date": tomorrow,
								labels: ["research"],
								status: "Done",
								subtasks: [
									{
										title: "Write up research analysis",
										isCompleted: true,
									},
									{
										title: "Calculate TAM",
										isCompleted: true,
									},
								],
							},
						],
					},
				],
			},
		],
	};
};
