// types/global.d.ts

export { }

declare global {
  interface IComponent {
    button: string,
    buttonLink: string,
    component: string,
    description: string,
    details: Array<{ title: string; date: string; description: string; image: string; }>
    id: string,
    image: string,
    sectionName: string,
    title: string
  }
  interface IPost {
    slug: string,
    image: string,
    title: string,
    date: string,
    description: string
  }
}