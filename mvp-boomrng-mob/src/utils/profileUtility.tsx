import { API } from 'aws-amplify';
import { createProfile, createPortfolio } from '../../graphql/mutations'
import { getProfile, getPortfolio } from '../../graphql/queries'

async function getProfileById() {
    const profile = await API.graphql({ query: getProfile, })
}