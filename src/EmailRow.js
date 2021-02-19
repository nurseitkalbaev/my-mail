import React from 'react'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import { Checkbox, Button } from '@material-ui/core'
import "./EmailRow.css"

function EmailRow(title, id, subject, description, time) {
    return (
        <div className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <Button>
                    <StarBorderOutlined />
                </Button>
                <Checkbox />
                <Button>
                    <LabelImportantOutlined />
                </Button>
            </div>
            <div className="emailRow__title"></div>
            <div className="emailRow__message"></div>
            <div className="emailRow__description"></div>
        </div>
    )
}

export default EmailRow
