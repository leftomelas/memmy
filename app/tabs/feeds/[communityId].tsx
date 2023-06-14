import React, {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {PostView, SortType} from "lemmy-js-client";
import {lemmyAuthToken, lemmyInstance} from "../../../lemmy/LemmyInstance";
import FeedView from "../../../ui/Feed/FeedView";
import {clearUpdateVote, selectFeed} from "../../../slices/feed/feedSlice";
import {useAppDispatch, useAppSelector} from "../../../store";

const FeedsCommunityScreen = () => {
    const {communityId} = useLocalSearchParams();
    const [posts, setPosts] = useState<PostView[]|null>(null);
    const [sort, setSort] = useState<SortType|null>(null);
    const [loading, setLoading] = useState(false);

    const {updateVote} = useAppSelector(selectFeed);

    const dispatch = useAppDispatch();

    useEffect(() => {
        load(true).then();
    }, [sort]);

    useEffect(() => {
        if(updateVote) {
            setPosts(posts?.map(post => {
                if(post.post.id === updateVote.postId) {
                    post.my_vote = updateVote.vote;
                }

                return post;
            }));
            dispatch(clearUpdateVote());
        }
    }, [updateVote]);

    const load = async (refresh = false) => {
        setLoading(true);

        try {
            const res = await lemmyInstance.getPosts({
                auth: lemmyAuthToken,
                community_id: Number(communityId),
                limit: 20,
                page: !posts ? 1 : (posts.length / 20) + 1,
                sort: sort
            });

            if(!posts || refresh) {
                setPosts(res.posts);
            } else {
                setPosts([...posts, ...res.posts]);
            }

            setLoading(false);
        } catch(e) {
            setLoading(false);
            return;
        }
    };

    return <FeedView posts={posts} load={load} loading={loading} setSort={setSort} communityTitle={true} />;
};

export default FeedsCommunityScreen;