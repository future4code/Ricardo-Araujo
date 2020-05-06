import {setPosts, setPostDetails} from "../actions/post";
import post from "./post";

describe("Post Reducer",()=>{
    test("SET_POST", ()=>{
        //PREPARACAO
        const newPostMock = "oi, eu sou um post"
        const mockAction = setPosts(newPostMock);
        const mockState = {posts: []};

        //EXECUCAO
        const newState = post(mockState, mockAction);


        //VERIFICACAO
        expect(newState.posts).toBe(newPostMock);
    })

    test("SET_POST_DETAILS",()=>{
        //PREPARACAO
        const mockPostDetails = ("Detalhes de um post");
        const mockAction = setPostDetails(mockPostDetails);
        const mockState = {mockPostDetails: []};

        //EXECUCAO
        const newState = post(mockState, mockAction);

        //VERIFICACAO
        expect(newState.postDetails).toBe(mockPostDetails)
    })
});