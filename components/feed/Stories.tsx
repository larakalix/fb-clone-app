import { stories } from "../../data/data"
import StoryCard from "./StoryCard"

const Stories = () => {
    return (
        <div className="flex items-center space-x-3 mx-auto">
            {
                stories.map(({ id, name, src, post }) => (
                    <StoryCard key={id} name={name} src={src} post={post} />
                ))
            }
        </div>
    )
}

export default Stories
