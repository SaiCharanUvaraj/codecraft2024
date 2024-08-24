import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import CelebrationIcon from '@mui/icons-material/Celebration';
import RestaurantIcon from '@mui/icons-material/Restaurant';import ReviewsIcon from '@mui/icons-material/Reviews';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import HailIcon from '@mui/icons-material/Hail';

const timelineEvents = [
  {
    time: "9:15 am",
    icon: <HailIcon />,
    title: "Reporting",
    dotColor: "secondary",
    connectorColor: "default"
  },
  {
    time: "9:30 am to 10:00 am",
    icon: <CelebrationIcon />,
    title: "Inaugural",
    dotColor: "primary",
    connectorColor: "default"
  },
  {
    time: "10:00 am",
    icon: <HourglassTopIcon />,
    title: "Hackathon starts",
    dotColor: "secondary",
    connectorColor: "secondary.main"
  },
  {
    time: "12:30 pm to 1:30pm",
    icon: <ReviewsIcon/>,
    title: "Evaluation 1",
    dotColor: "primary",
    connectorColor: "secondary.main"
  }, {
    time: "1:30 pm to 2:30 pm",
    icon: <RestaurantIcon />,
    title: "Lunch Break",
    dotColor: "secondary",
    connectorColor: "secondary.main"
  },
  {
    time: "5:30 pm to 6:00 pm",
    icon: <FastfoodIcon />,
    title: "Break",
    dotColor: "primary",
    connectorColor: "secondary.main"
  },
  {
    time: "6:00 pm to 8:00 pm",
    icon: <ReviewsIcon />,
    title: "Evaluation 2",
    dotColor: "secondary",
    connectorColor: "secondary.main"
  },
  {
    time: "8:00 pm to 9:00 pm",
    icon: <RestaurantIcon />,
    title: "Dinner",
    dotColor: "primary",
    connectorColor: "secondary.main"
  },
  {
    time: "7:30 am to 8:00 am",
    icon: <RestaurantIcon />,
    title: "Breakfast",
    dotColor: "secondary",
    connectorColor: "secondary.main"
  },
  {
    time: "9:30 am",
    icon: <HourglassBottomIcon />,
    title: "Hackathon ends",
    dotColor: "primary",
    connectorColor: "secondary.main"
  },
  {
    time: "9:30 am to 11:00 am",
    icon: <ReviewsIcon />,
    title: "Evaluation 3",
    dotColor: "secondary",
    connectorColor: "secondary.main"
  },
  {
    time: "11:00 am to 11:30 am",
    icon: <EmojiEventsIcon />,
    title: "Valedictory",
    dotColor: "primary",
    connectorColor: "secondary.main"
  },
  {
    time: "11:30 am",
    icon: <WavingHandIcon />,
    title: "Code Craft Ends",
    dotColor: "secondary",
    connectorColor: "secondary.main"
  },
];

export default function CustomizedTimeline() {
  return (
    <div className="pt-24" >
      <div className="text-white flex justify-center m-5 mr-2  font-semibold items-baseline text-6xl font-outfit">
        <p>Timeline</p>
      </div>
      <div className="p-5 ">
        <Timeline position="alternate">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align={index % 2 === 0 ? "right" : "left"}
                variant="body2"
                color="white"
                fontFamily={"monospace"}
              >
                {event.time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                {index > 0 && <TimelineConnector sx={{ bgcolor: event.connectorColor }} />}
                <TimelineDot color={event.dotColor}>
                  {event.icon}
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: event.connectorColor }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }} color={"white"}>
                <Typography variant="h6" component="span" fontFamily={"revert"}>
                  {event.title}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
