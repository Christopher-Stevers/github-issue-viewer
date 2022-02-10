import  ReactMarkdown  from "react-markdown";

export default function Issue({content}) {
    return (
        <div className="h-min rounded-md drop-shadow-2xl shadow-2xl shadow-red-500/50 max-w-sm bg-black text-pink-500 my-4 px-6 w-[200rem]"> 
        <h2 className="font-sans text-4xl underline font-semibold px-2 py-4 cursor-pointer" ><a href={content.url}>{content.title}</a></h2>
        <ReactMarkdown>
     {content.body}</ReactMarkdown>
        </div>
            )
}