import Vue from "vue";
import Router from "vue-router";
import smfConfigSystem from "./views/smf-config-system.vue";
import smfConfigWeb from "./views/smf-config-web.vue";
import smfConfigDevice from "./views/smf-config-device.vue";
import smfConfigGateway from "./views/smf-config-gateway.vue";
import smfConfigMeter from "./views/smf-config-meter.vue";
import smfConfigLora from "./views/smf-config-lora.vue";
import smfConfigUpload from "./views/smf-config-upload.vue";
import smfConfigDownload from "./views/smf-config-download.vue";
import smfStatusSession from "./views/smf-status-sessions.vue"
import smfStatusTarget from "./views/smf-status-targets.vue"
import smfStatusConnection from "./views/smf-status-connections.vue"
import smfMonitorSystem from "./views/smf-monitor-system.vue"
import smfMonitorMessages from "./views/smf-monitor-messages.vue"
import smfMonitorTSDB from "./views/smf-monitor-tsdb.vue"
import smfMonitorLora from "./views/smf-monitor-lora.vue"
import smfTaskCSV from "./views/smf-task-csv.vue"
import smfTaskTSDB from "./views/smf-task-tsdb.vue"

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:
        [
            {
                path: "/",
                name: "smfHome",
                // route level code-splitting
                // this generates a separate chunk (smf-home.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import("./views/smf-home.vue")
            },
            {
                path: "/config/system",
                name: "smf-config-system",
                component: smfConfigSystem
            },
            {
                path: "/config/web",
                name: "smf-config-web",
                component: smfConfigWeb
            },
            {
                path: "/config/device",
                name: "smfConfigDevice",
                component: smfConfigDevice
            },
            {
                path: "/config/gateway",
                name: "smfConfigGateway",
                component: smfConfigGateway
            },
            {
                path: "/config/meter",
                name: "smfConfigMeter",
                component: smfConfigMeter
            },
            {
                path: "/config/lora",
                name: "smfConfigLora",
                component: smfConfigLora
            },
            {
                path: "/config/upload",
                name: "smfConfigUpload",
                component: smfConfigUpload
            },
            {
                path: "/config/download",
                name: "smfConfigDownload",
                component: smfConfigDownload
            },

            //
            //  status
            //
            {
                path: "/status/sessions",
                name: "smfStatusSession",
                component: smfStatusSession
            },
            {
                path: "/status/targets",
                name: "smfStatusTarget",
                component: smfStatusTarget
            },
            {
                path: "/status/connections",
                name: "smfStatusConnection",
                component: smfStatusConnection
            },

            //
            //  monitoring
            //
            {
                path: "/monitor/system",
                name: "smfMonitorSystem",
                component: smfMonitorSystem
            },
            {
                path: "/monitor/messages",
                name: "smfMonitorMessages",
                component: smfMonitorMessages
            },
            {
                path: "/monitor/tsdb",
                name: "smfMonitorTsdb",
                component: smfMonitorTSDB
            },
            {
                path: "/monitor/lora",
                name: "smfMonitorLora",
                component: smfMonitorLora
            },

            //
            //  tasks
            //
            {
                path: "/task/csv",
                name: "smfTaskCSV",
                component: smfTaskCSV
            },
            {
                path: "/task/tsdb",
                name: "smfTaskTSDB",
                component: smfTaskTSDB
            },
            {
                path: "/task/plausibility",
                name: "smfTaskPlausibility",
                component: () =>
                    import("./views/smf-task-plausibility.vue")
            }
        ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return { x: 0, y: 0 }
    }
})