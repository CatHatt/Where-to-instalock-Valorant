type Agent = {
    name: string
    img: string
}

import currentAgents from './agents'

const agentGrid = document.getElementById('agentGrid') as HTMLDivElement

function createAgentElement(agent: Agent) {
    const agentElement = document.createElement('img')
    agentElement.src = agent.img
}
