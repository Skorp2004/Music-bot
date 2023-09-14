module.exports = {
    app: {
        token: 'MTE1MjAwNjE4MjI4NjkzODIxMg.GfP6bd.E8JNxfFJ3l2rtKAx4YRvZk93pAAb0y74MThFrQ',
        playing: 'by Skorp ❤️',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
