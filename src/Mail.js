import { ArrowBack, Delete, Email, MoveToInbox,Error,  WatchLater, CheckCircle, LabelImportant, MoreVert, UnfoldMore, Print, ExitToApp } from '@material-ui/icons'
import { Button} from '@material-ui/core'
import React from 'react'
import './Mail.css'
import { useHistory } from 'react-router-dom'

function Mail() {
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <Button onClick={()=> history.push("/")}>
                        <ArrowBack /> 
                    </Button>
                    
                    <Button>
                        <MoveToInbox /> 
                    </Button>
                    
                    <Button>
                        <Error /> 
                    </Button>
                    
                    <Button>
                        <Delete /> 
                    </Button>
                    
                    <Button>
                        <Email /> 
                    </Button>
                    
                    <Button>
                        <WatchLater /> 
                    </Button>
                    
                    <Button>
                        <CheckCircle /> 
                    </Button>
                    
                    <Button>
                        <LabelImportant /> 
                    </Button>
                    
                    <Button>
                        <MoreVert /> 
                    </Button>


                </div>

                <div className="mail__toolsRight">

                    <Button>
                        <UnfoldMore /> 
                    </Button>

                    <Button>
                        <Print /> 
                    </Button>

                    <Button>
                        <ExitToApp /> 
                    </Button>

                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportant className="mail__important" />
                    <p>Title</p>
                    <p className="mail__time">10pm</p>
                </div>

                <div className="mail__message">
                    <p>This is a message</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
