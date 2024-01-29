export const baseUrl = 'https://jsonplaceholder.typicode.com/'

class Endpoints {
    posts = `${baseUrl}/posts`
    post = (id: number) => `${baseUrl}/posts/${id}`
}

export const endpoints = new Endpoints();
