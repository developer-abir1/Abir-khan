const contacts = {
    name: "contacts",
    title: "Contacts",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "url",
            title: "URL", 
            type: "url",
        },
        
    ],

};


export default contacts;