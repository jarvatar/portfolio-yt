export default {
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Brand or company name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
