import got from 'got';

export async function replicateGraphQLRequest(profileId: string): Promise<any> {
    console.log(`Start replicateGraphQLRequest. profileId: ${profileId}`)

    const url = 'https://www.facebook.com/api/graphql';

    // Replace with actual headers required by the endpoint, including authentication if needed
    const headers = {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'dnt': '1',
        'origin': 'https://www.facebook.com',
        'pragma': 'no-cache',
        'referer': 'https://www.facebook.com/photo/?fbid=1692213461282212&set=ecnf.100014807225880',
        'sec-ch-prefers-color-scheme': 'light',
        'sec-ch-ua': '"Not)A;Brand";v="24", "Chromium";v="116"',
        'sec-ch-ua-full-version-list': '"Not)A;Brand";v="24.0.0.0", "Chromium";v="116.0.5845.110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"macOS"',
        'sec-ch-ua-platform-version': '"13.5.0"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'viewport-width': '1555',
        'x-fb-friendly-name': 'ProfileCometHeaderQuery',
        'x-fb-lsd': 'AVot1N6vgY8'
    };

    // Construct the payload. The exact structure depends on the GraphQL query requirements.
    const payload = {
        av: '0',
        __user: '0',
        __a: '1',
        __req: 'g',
        __hs: '19599.HYP:comet_loggedout_pkg.2.1..0.0',
        dpr: '1',
        __ccg: 'GOOD',
        __rev: '1008351450',
        __s: 'k9lul1:f1yras:6tfwpp',
        __hsi: '7273246140377822998',
        __dyn: '7xeUmwlEnwn8K2WnFw9-2i5U4e1ZyUW3q32360CEbo2fw9m3y4o0B-q1ew65xO2O1Vw8G11xmfz83WwgEcEhwGwQw9m1YwBgao6C0Mo2sx-3m1mzXw8W58jwGzE2swwwJK2W5olw8Xxm16waCm7-8w4ywJwSyES0QEcU2ZwhEkxe3u362-2B0oo5C1hxG1FwhE7W',
        __csr: 'gD2clljYZildbcD9TePqLnCLFbF9nF5JrlaiZKp5EyhAVKLjnKibQATK9GbKrCFefxu9hETAhGyEmQGUx2kqcK494bmuFf-i4UW9KiunKEGV9Kiicgy5-bQXHxGaCze8yGJ17HLHzpGK4Vu8xjBxOfw4BCw3MoS12w4bgtw4gwhz0AwzHQiiiU32w8u04n8Dw3so2fo0gRw2z80zO0oi1hxkM0r_w2ZE05ijw0zmw0I-g3nVN82Vg1c81nofo2Ba0ha1jxaehll2Evz40V831gK1Dzoeoco3vo2Vx3g2fg3jwik0Jo5pp6m',
        fb_api_caller_class: 'RelayModern',
        fb_api_req_friendly_name: 'ProfileCometHeaderQuery',
        variables: JSON.stringify({
            scale: 1,
            selectedID: profileId,
            selectedSpaceType: 'community',
            selectedTab: profileId,
            shouldUseFXIMProfilePicEditor: false,
            userID: profileId
        }),
        server_timestamps: 'true',
        doc_id: '9929832307087807'
    };

    try {
        console.log(`${profileId} // ${JSON.stringify(payload)}`)
        const response = await got.post(url, {
            form: payload,
            headers: headers
        }).json();
        console.log(JSON.stringify(response))

        console.log(`Done replicateGraphQLRequest. profileId: ${profileId}`)
        return response;
    } catch (error) {
        console.error('Error making the request: ', error);
        throw error;
    }
}