/* eslint-disable max-len */
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      type: 'figure',
      title: 'Main image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'This ends up on summary pages, on Google, when people share your project in social media and for the project preview on the projects page.',
    },
    {
      name: 'purpose',
      type: 'text',
      title: 'Purpose',
      description: 'Purpose of the project: Why the project was started.',
    },
    {
      name: 'objective',
      type: 'text',
      title: 'Objective',
      description: 'Objective: What was accomplished during the project.',
    },
    {
      name: 'approach',
      type: 'text',
      title: 'Approach',
      description: 'Approach: How the project was accomplished.',
    },
    {
      name: 'techstack',
      type: 'array',
      title: 'Technology stack used for the project.',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    },
    {
      name: 'role',
      type: 'text',
      title: 'Role',
      description: 'Your role: How you contributed to the project.',
    },
    {
      name: 'credits',
      type: 'text',
      title: 'Credits',
      description:
        'Credits: Who you should thank for resources or contributions.',
    },
    {
      name: 'repo',
      type: 'url',
      title: 'Project repo',
      description: 'Link to the repo on GitHub or equivalent.',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Project live URL',
      description: 'Link to the live project.',
    },
  ],
  // ordering for display in Sanity studio
  orderings: [
    {
      name: 'publishedAtDesc',
      title: 'Date, Descending',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
