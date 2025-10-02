import { defineType, defineField } from "sanity"

export const linkableImage = defineType({
    name: "brandIcons",
    type: "document",
    title: "Obrázky s odkazem (Logo, Reel)",
    fields: [
        defineField({
            name: "brandLogo",
            title: "Loga klienta",
            type: "image",
        }),
        defineField({
            name: "brandLink",
            title: "Odkaz na klienta",
            type: "string",
        }),
    ]
})