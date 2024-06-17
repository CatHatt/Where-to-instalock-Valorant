import './AgentGrid.scss'
import { useState } from 'react'

import currentAgents from '../assets/icons/import'

type Agent = {
    name: string
    img: string
    unlocked: boolean
}

export default function AgentGrid() {
    const [agentItems, setAgentItems] = useState(getAgentGrid(currentAgents))

    return (
        <>
            <div className='grid'>{agentItems}</div>
        </>
    )

    function getAgentGrid(currentAgents: Agent[]) {
        return currentAgents
            .map((agent, index) => (
                <img
                    src={agent.img}
                    alt={agent.name}
                    key={agent.name}
                    draggable='false'
                    className={`agent ${agent.unlocked ? 'locked' : ''}`}
                    onClick={() => {
                        currentAgents[index].unlocked =
                            !currentAgents[index].unlocked
                        setAgentItems(getAgentGrid(currentAgents))
                    }}
                />
            ))
            .sort((a, b) => {
                if (
                    !a.props.className.includes('locked') &&
                    b.props.className.includes('locked')
                )
                    return -1
                if (
                    a.props.className.includes('locked') &&
                    !b.props.className.includes('locked')
                )
                    return 1

                const items = [a, b]
                if (items == items.sort()) return -1
                return 1
            })
    }
}
