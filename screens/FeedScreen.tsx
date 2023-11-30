import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { useAtom, useSetAtom } from 'jotai';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import { feedsAtom, votes } from '../store/atoms';

function FeedScreen() {
  const navigation = useNavigation();
  const [feeds] = useAtom(feedsAtom)


  const NUM_LINES = 3;

  const [expandedItems, setExpandedItems] = useState([]);
  const [userVoted, setUserVoted] = useState({ value: false, type: '' })

  const toggleItemExpansion = (itemId: any) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(itemId)) {
        return prevExpandedItems.filter((id) => id !== itemId);
      } else {
        return [...prevExpandedItems, itemId];
      }
    });
  };

  const isItemExpanded = (itemId: any) => {
    return expandedItems.includes(itemId);
  };

  const onTextLayout = (e: { nativeEvent: { lines: string | any[]; }; }, itemId: any) => {
    const lines = e.nativeEvent.lines.length;
    if (lines <= NUM_LINES && !isItemExpanded(itemId)) {
      toggleItemExpansion(itemId);
    }
  };

  useEffect(() => {
    setExpandedItems([]);
  }, []);

  const addVote = useSetAtom(votes);

  const handleVote = (type: string, id) => {
    if (type == "up") {
      if (userVoted.type != "up") addVote({ feedId: id, type: 'up' })
    }
    if (type == "down") {
      if (userVoted.type != "down") addVote({ feedId: id, type: 'down' })
    }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={feeds}
        renderItem={({ item, index }) => {
          return (
            <Pressable key={item.id} onPress={() => navigation.navigate('post-detail', item)}>
              <View style={{ height: 'auto' }}>
                <View
                  style={{
                    height: 64,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={{
                      uri: 'https://picsum.photos/200',
                    }}
                    width={48}
                    height={48}
                    style={{ borderRadius: 24, marginLeft: 24 }}
                  />
                  <View style={{ marginLeft: 16 }}>
                    <Text
                      style={{ fontWeight: '600', fontSize: 14, lineHeight: 16.94, color: '#333' }}>
                      {item.userFullName}
                    </Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 18, color: '#333' }}>
                      {item.createdAt}
                    </Text>
                  </View>
                </View>
                <View style={{ height: 0.5, backgroundColor: '#C4C4C4' }} />
                <View>
                  <Text style={{ margin: 24, color: '#333' }}
                    onTextLayout={(e) => onTextLayout(e, item.id)}
                    numberOfLines={isItemExpanded(item.id) ? undefined : NUM_LINES}
                  >
                    {item.feedContent}
                  </Text>
                  {!isItemExpanded(item.id) && (
                    <Pressable style={{ marginHorizontal: 24 }} onPress={() => toggleItemExpansion(item.id)}>
                      <Text style={{ color: '#2b79c9' }}>
                        More
                      </Text>
                    </Pressable>
                  )}
                  <Image
                    source={{
                      uri: 'https://picsum.photos/200',
                    }}
                    height={200}
                    style={{ marginTop: 24 }}
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
                      {item.comments.length}
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
                    <Pressable onPress={() => handleVote('down', item.id)}>
                      <Image
                        source={IconDownvoteInactive}
                        height={18}
                        width={18}
                        style={{ marginLeft: 22 }}
                      />
                    </Pressable>
                    <Text
                      style={{
                        width: 24,
                        marginHorizontal: 11,
                        textAlign: 'center',
                      }}>
                      {item.votes}
                    </Text>
                    <Pressable onPress={() => handleVote('up', item.id)}>
                      <Image
                        source={IconUpvoteInactive}
                        height={18}
                        width={18}
                        style={{ marginRight: 22 }}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={{ height: 4, backgroundColor: '#C4C4C4' }} />
            </Pressable>
          )
        }}
      />
    </SafeAreaView>
  );
}

export default FeedScreen;
