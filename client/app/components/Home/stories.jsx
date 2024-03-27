import StoryCard from "./story-card";

const stories = [
    {
        name: "Mehul Tailang",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Mehul Tailang",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Mehul Tailang",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mehul Tailang",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Mehul Tailang",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];

function Stories() {
    return(
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map( (story) => (
                <StoryCard 
                    name={story.name} 
                    src={story.src} 
                    profile={story.profile}
                />
            ))}
        </div>
    );
}

export default Stories;