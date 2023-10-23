export interface PostMeta {
	title: string;
	date: Date;
	summary: string | undefined;
}
export interface Post {
	path: string;
	meta: PostMeta;
}
