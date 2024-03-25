import Stories from "./stories";
import InputBox from "./input-box";
import Posts from "./posts";

function Feed() {
    return(
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 
                    xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg">
                {/* Stories */}
                <Stories/>

                {/* Input box */}
                <InputBox/>

                {/* Posts */}
                <Posts/>

            </div>
        </div>
    );
}

export default Feed;