import { defineMessages } from "react-intl";

export default defineMessages({
    appHeading: {
        id: 'header.heading',
        defaultMessage: "OSM Galaxy"
    },
    about: {
        id: 'navbar.about',
        defaultMessage: "About"
    },
    exploreData: {
        id: 'navbar.exploreData',
        defaultMessage: "Explore Data"
    },
    tagline: {
        id: 'header.tagline',
        defaultMessage: "Mapping our world together"
    },
    privacyPolicy: {
        id: 'banner.tracking.privacyPolicy',
        defaultMessage: 'privacy policy',
    },
    aboutInfoCollected: {
        id: 'banner.tracking.information.collected',
        defaultMessage: 'About the information we collect',
    },
    trackingBannerText: {
        id: "banner.tracking.text",
        defaultMessage: 'We use cookies and similar technologies to recognise and analyse your visits, and measure traffic usage and activity. You can learn about how we use the data about your visit or information you provide reading our {link}. By clicking "I Agree", you consent to the use of cookies.'
    },
    disagree: {
        id: 'banner.tracking.button.disagree',
        defaultMessage: 'I Do Not Agree',
      },
      agree: {
        id: 'banner.tracking.button.agree',
        defaultMessage: 'I Agree',
      },
    galaxyTagline: {
        id: 'home.galaxy.tagline',
        defaultMessage: "Access All OSM Data Outputs in One Portal"
    },
    galaxySummary: {
        id: 'home.galaxy.summary',
        defaultMessage: "Galaxy is a work in progress project focused on bringing together all of the OSM data outputs under one umbrella so that the data is more available, accessible and ready to use for all kinds of users"
    },
    exploreButton: {
        id: 'home.galaxy.explore.button',
        defaultMessage: "Start Exploring Data"
    },
    unauthorised: {
        id: 'reports.unauthorised.section',
        defaultMessage: "Please log in first to view the report."
    },
    mapathonSummaryContributors: {
        id: 'reports.mapathon.summary.contributors',
        defaultMessage: "Total Unique Contributors"
    },
    mapathonSummaryCreatedFeatures: {
        id: 'reports.mapathon.summary.created.features',
        defaultMessage: "Features Created"
    },
    mapathonSummaryModifiedFeatures: {
        id: 'reports.mapathon.summary.modified.features',
        defaultMessage: "Features Modified"
    },
    mapathonSummaryZeroFeatures: {
        id: 'reports.mapathon.summary.zero.features',
        defaultMessage: "None"
    },
    mapathonSummaryFormStartDate: {
        id: 'reports.mapathon.summary.form.input.startDate',
        defaultMessage: "Start Date"
    },
    mapathonSummaryFormEndDate: {
        id: 'reports.mapathon.summary.form.input.endDate',
        defaultMessage: "End Date"
    },
    mapathonSummaryFormProjectIds: {
        id: 'reports.mapathon.summary.form.input.projectIds',
        defaultMessage: "Tasking Manager Project IDs"
    },
    mapathonSummaryFormIdsPlaceholder: {
        id: 'reports.mapathon.summary.form.projectIds.placeholder',
        defaultMessage: "Enter the Tasking Manager Project IDs separated by commas"
    },
    mapathonSummaryFormHashtags: {
        id: 'reports.mapathon.summary.form.input.hashtags',
        defaultMessage: "Mapathon Hashtags"
    },
    mapathonSummaryFormHashtagsPlaceholder: {
        id: 'reports.mapathon.summary.form.hashtags.placeholder',
        defaultMessage: "Enter the hashtags separated by commas"
    },
    ErrorTitle: {
        id: 'reports.mapathon.summary.form.error.title',
        defaultMessage: "It was not possible to run this query."
    },
    mapathonSummaryErrorEmptyFields: {
        id: 'reports.mapathon.summary.form.error.empty',
        defaultMessage: "Please fill in <b>one</b> of the following to continue"
    },
    mapathonSummaryErrorInvalidIds: {
        id: 'reports.mapathon.summary.form.error.invalidIds',
        defaultMessage: "Please input numerical values for the TM Project IDs."
    },
    mapathonSummaryErrorInvalidTime: {
        id: 'reports.mapathon.summary.form.error.invalidTime',
        defaultMessage: "Time difference should be less than or equal to 24 hours."
    },
    ServerError: {
        id: 'reports.mapathon.summary.form.error.server',
        defaultMessage: "There was a problem with the server - ({error}) while executing this query. Please try again later."
    },
    footerOrganisation: {
        id: 'about.footer.organisation',
        defaultMessage: 'This project is under development by {OrganisationLink}.'
    },
    footerContact: {
        id: 'about.footer.contact',
        defaultMessage: 'Reach out on {GithubLink} or {SlackLink}.'
    }
    
})
