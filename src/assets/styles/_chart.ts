import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            width: "100%",
            paddingTop: 24
        },
        activeStatus: {
            background: "#6C60F7 !important",
            marginRight: 8,
            borderRadius: 8
        },
        deactiveStatus: {
            border: "1px solid #6C60F7",
            background: "transparent",
            marginRight: 8,
            borderRadius: 8
        },
        changePercent: {
            display: "flex",
            "& p": {
                fontSize: "16px !important",
                paddingRight: theme.spacing(2)
            }
        },
        chartTitle: {
            fontSize: 14,
            fontWeight: 500,
            color: "#9DD1B2"
        },
        currentChartValue: {
            fontSize: 48,
            fontWeight: 500,
            [theme.breakpoints.down('xs')]: {
                fontSize: 36
            }
        },
        tabList: {
            "& span": {
                fontSize: 14,
                fontWeight: 500,
            },
            "& button": {
                minWidth: "unset"
            },
            "& .MuiTabs-indicator": {
                height: 4,
                backgroundColor: theme.palette.secondary.light
            }

        },
        select: {
            paddingTop: 8,
            paddingBottom: 8,
        },
        detailChartTabs: {
            padding: theme.spacing(4),
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(0),
                "& button": {
                    padding: "6px 8px"
                }

            }
        },
        metamaskButton: {
            border: '1px solid #293D71',
            borderRadius: 20,
            marginTop: 8
        },
        mobileMenuItem: {
            fontFamily: 'Poppin',
            fontSize: 14
        }
    })
);
console.log("useStyles:", useStyles)
export default useStyles;