export interface Blog {
    _id: string
    title: string
    summary: string
    content: string
    creator: string
    source: string
    image?: Image
}

export interface Image {
    format: string
    created_at: string
    bytes: number
    url: string
    asset_folder: string
    display_name: string
}
