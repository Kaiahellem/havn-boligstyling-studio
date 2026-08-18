import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1mqjnxyz',
    dataset: 'production'
  },
  deployment: {
    appId: 'vci3ko7pamomrv6dl586e1yh',
    autoUpdates: true,
  }
})
