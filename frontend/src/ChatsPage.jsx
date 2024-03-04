import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                  projectId='b520d108-56f7-4daa-b6f4-4aeeee7413d5'
                  username={props.user.username}
                  secret={props.user.secret}
                  style={{ height: '100%'}}
                  />
        </div>
    )
}

export default ChatsPage