import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';

import { useAtom, useSetAtom } from 'jotai';
import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconDownVoteActive from '../assets/downvote_active.png';
import { addCommentToFeed, feedsAtom, votes, votedAtom } from '../store/atoms';

function PostDetailScreen({ route }) {
  const { id } = route.params
  const navigation = useNavigation();

  const [userComment, setUserComment] = useState("")
  const [userVotedSaved, setUserVotedSaved] = useState(votedAtom)
  const [userVoted, setUserVoted] = useState({value: false, type: ''})
  const [feeds, setFeeds] = useAtom(feedsAtom)
  const detailData = feeds.find((feed) => feed.id === id)
  const disabledComment = userComment == "" || userComment.trim().length == 0
  const addComment = useSetAtom(addCommentToFeed);
  
  const textInput = useRef()
  const addVote = useSetAtom(votes);
  const handleAddComment = () => {
    addComment({ feedId: detailData?.id, newComment: userComment });
    setUserComment("")
    textInput?.current?.clear()

  };
  const handleVote = (type: string) => {
    if (type == "up") {
      if (userVoted.type != "up") addVote({ feedId: detailData?.id, type: 'up' })
    }
    if (type == "down") {
      if (userVoted.type != "down") addVote({ feedId: detailData?.id, type: 'down' })
    }
    setUserVoted({ value: true, type })
    setUserVotedSaved([...userVotedSaved, { feedId: id, value: true, type }])
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  source={IconBack}
                  height={18}
                  width={18}
                  style={{ marginLeft: 22 }}
                />
              </Pressable>
              <Image
                source={{
                  uri: detailData?.userPhoto,
                }}
                width={48}
                height={48}
                style={{ borderRadius: 24, marginLeft: 24 }}
              />
              <View style={{ marginLeft: 16 }}>
                <Text
                  style={{ fontWeight: '600', fontSize: 14, lineHeight: 16.94 }}>
                  {detailData?.userFullName}
                </Text>
                <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 18 }}>
                  {detailData?.createdAt}
                </Text>
              </View>
            </View>
            <View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} />
            <View>
              <Text style={{ margin: 24 }}>
                {detailData?.feedContent}
              </Text>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{ marginLeft: 22 }}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{ marginLeft: 24 }}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  {detailData?.comments?.length}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={{ marginLeft: 22 }}
                />
                {userVoted.value && userVoted.type == "down" ? (
                  <Pressable onPress={() => handleVote('down')}>
                    <Image
                      source={IconDownVoteActive}
                      height={18}
                      width={18}
                      style={{ marginLeft: 22 }}
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => handleVote('down')}>
                    <Image
                      source={IconDownvoteInactive}
                      height={18}
                      width={18}
                      style={{ marginLeft: 22 }}
                    />
                  </Pressable>

                )}
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  {detailData?.votes}
                </Text>
                {userVoted.value && userVoted.type == "up" ? (
                  <Pressable onPress={() => handleVote('up')}>
                    <Image
                      source={IconUpvoteActive}
                      height={18}
                      width={18}
                      style={{ marginRight: 22 }}
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => handleVote('up')}>
                    <Image
                      source={IconUpvoteInactive}
                      height={18}
                      width={18}
                      style={{ marginRight: 22 }}
                    />
                  </Pressable>

                )}
              </View>
            </View>
          </View>
        }
        ListFooterComponent={<View style={{ marginBottom: 50 }} />}
        data={detailData?.comments}
        ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} />}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                minHeight: 72,
                paddingVertical: 16,
                paddingHorizontal: 24,
              }}>
              <Image
                source={{
                  uri: item.userPhoto,
                }}
                width={36}
                height={36}
                style={{ borderRadius: 24, marginRight: 16 }}
              />
              <View style={{ width: '90%' }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 12,
                    lineHeight: 14.52,
                    color: '#828282',
                  }}>
                  {item.userFullName}
                </Text>
                <Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 19.36 }}>
                  {item.comment}
                </Text>
              </View>
            </View>
          )
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
          backgroundColor: '#c4c4c4'
        }}>
        <View style={{ height: 0.5, }} />
        <TextInput ref={textInput} placeholder="Enter Comment" style={{ flex: 1 }} onChangeText={(text) => setUserComment(text)} onSubmitEditing={handleAddComment} />
        <Button title="Comment" onPress={handleAddComment} disabled={disabledComment} />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
