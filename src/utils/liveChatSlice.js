import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: 'liveChat',
    initialState: {
        showLiveChat: false,
    },
    reducers: {
        toggleLiveChat: (state) => {
            state.showLiveChat = !state.showLiveChat;
        },
        openLiveChat: (state) => {
            state.showLiveChat = true;
        },
        closeLiveChat: (state) => {
            state.showLiveChat = false;
        },
    },
});

export const { toggleLiveChat, openLiveChat, closeLiveChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
