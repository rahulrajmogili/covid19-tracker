import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core"

function InfoBox({title, cases, total}) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          {/* Title: Coronovirus cases */}
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>

          {/* +120k number of cases */}
          <h2 className="infoBox__cases">
            {cases}
          </h2>

          {/* +1.2M Total */}
          <Typography className="infoBox__total" color="textSecondary">
            {total} Total
          </Typography>

        </CardContent>
      </Card>
    </div>
  )
}

export default InfoBox
