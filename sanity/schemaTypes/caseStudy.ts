import { defineType, defineField } from "sanity"

export const caseStudy = defineType({
    name: "caseStudy",
    type: "document",
    title: "Case study",
    fields: [
        defineField({
            name: "main",
            title: "Hlavní fotka",
            type: "image",
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
        }),
        defineField({
            name: "fbLink",
            title: "Odkaz na FB",
            type: "string",
        }),
        defineField({
            name: "igLink",
            title: "Odkaz na IG",
            type: "string",
        }),
        defineField({
            name: "name",
            title: "Název firmy",
            type: "string",
        }),
         defineField({
            type: "slug",
            name: "slug",
            title: "Slug",
            options: {
                source: "name"
            }
        }),
        defineField({
            name: "popis",
            title: "Popis firmy",
            type: "string",
        }),
        defineField({
            name: "from",
            title: "Od",
            type: "string",
        }),
        defineField({
            name: "to",
            title: "Do",
            type: "string",
        }),
        defineField({
            name: "services",
            title: "Služby",
            type: "array",
            of: [
                {type: "string"}
            ]
        }),
        defineField({
            name: "finishes",
            title: "Cíle",
            type: "array",
            of: [
                {type: "string"}
            ]
        }),
        defineField({
            name: "tools",
            title: "Nástroje",
            type: "array",
            of: [
                {type: "string"}
            ]
        }),
        defineField({
            name: "results",
            title: "Výsledky",
            type: "array",
            of: [
                {type: "string"}
            ]
        }),
        defineField({
            name: "reels",
            title: "Reels",
            type: "array",
            of: [
                {type: "brandIcons"}
            ]
        }),
        defineField({
            name: "iphonePred",
            title: "iPhone fotka - před",
            type: "image",
        }),
        defineField({
            name: "iphonePotom",
            title: "iPhone fotka - potom",
            type: "image",
        }),
        defineField({
            name: "statistics",
            title: "Statistiky",
            type: "array",
            of: [
                {type: "statistic"}
            ]
        }),
    ]
})