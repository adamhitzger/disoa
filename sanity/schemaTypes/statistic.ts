import { defineType, defineField } from "sanity"

export const statistic = defineType({
    name: "statistic",
    type: "object",
    title: "Statistika",
    fields: [
        defineField({
            name: "to",
            title: "Číslo",
            type: "number",
        }),
        defineField({
            name: "endText",
            title: "Znak za číslem (X,%,K,M)",
            type: "string",
        }),
        defineField({
            name: "text",
            title: "Text pod statistikou",
            type: "string",
        }),
    ]
})