import { atom } from "jotai";
export const feedsAtom = atom([
  {
    id: 'd6edafb8-7b79-4f66-903e-6dacd752338b',
    userFullName: 'Usup Suparma',
    userPhoto: 'https://picsum.photos/200',
    createdAt: 'Mar 27, 2023',
    feedPhoto: 'https://picsum.photos/200',
    feedContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.`,
    votes: 0,
    comments: [
      {
        userFullName: 'Usup Suparma',
        userPhoto: 'https://picsum.photos/200',
        comment: 'Ohh gitu, oke!'
      }
    ]
  },
  {
    id: 'c481a51f-ece0-400c-b2e1-04cd0efa2dd8',
    userFullName: 'Bagas Selalu',
    userPhoto: 'https://picsum.photos/200',
    createdAt: 'Mar 27, 2023',
    feedPhoto: 'https://picsum.photos/200',
    feedContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.`,
    votes: 0,
    comments: [
      {
        userFullName: 'Usup Suparma',
        userPhoto: 'https://picsum.photos/200',
        comment: 'Ohh gitu, oke!'
      }
    ]
  },
  {
    id: 'c481a51f-ece0-400c-b2e1-04sd0efa2dd8',
    userFullName: 'Bagas Selalu',
    userPhoto: 'https://picsum.photos/200',
    createdAt: 'Mar 27, 2023',
    feedPhoto: 'https://picsum.photos/200',
    feedContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    votes: 0,
    comments: [
      {
        userFullName: 'Usup Suparma',
        userPhoto: 'https://picsum.photos/200',
        comment: 'Ohh gitu, oke!'
      }
    ]
  },
])

export const votedAtom = []



export const addCommentToFeed = atom(null, (get, set, { feedId, newComment }) => {
  const feeds = get(feedsAtom);
  const updatedFeeds = feeds.map(feed =>
    feed.id === feedId
      ? {
        ...feed, comments: [...feed.comments, {
          userFullName: 'Usup Suparma',
          userPhoto: 'https://picsum.photos/200',
          comment: newComment
        }]
      }
      : feed
  );
  set(feedsAtom, updatedFeeds);
});
export const votes = atom(null, (get, set, { feedId, type }) => {
  const feeds = get(feedsAtom);
  const updatedFeeds = feeds.map(feed =>
    feed.id === feedId
      ? { ...feed, votes: type =='up' ? feed.votes + 1: feed.votes - 1 }
      : feed
  );
  set(feedsAtom, updatedFeeds);
});