export interface Blog {
    _id: string
    title: string
    summary: string
    content: string
    creator: string
    source: string
    image?: Image
    comments: Comment[]
}

export interface Image {
    format: string
    created_at: string
    bytes: number
    url: string
    asset_folder: string
    display_name: string
}


export interface Comment {
    _id: string;
    name: string;
    blogId: string;
    content: string;
    parentComment?: Comment;
    created_at: string
    updated_at: string
}