const buttonColors = ["default", "primary", "danger"] as const
export type ButtonColor = typeof buttonColors[number]

const buttonVariants = ["outline", "text"] as const
export type ButtonVariant = typeof buttonVariants[number]
