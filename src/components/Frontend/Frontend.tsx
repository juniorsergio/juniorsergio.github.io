import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import { Markup } from 'interweave';

import { Container } from "./styles";
import { useEffect, useState } from 'react';

interface FrontendProject {
    id: string
    stacks: string[]
    title: string
    description: string
    image: string
    type: 'active' | 'disabled'
    url?: string
}

export function Frontend(){
    const { t } = useTranslation()
    const [projects, setProjects] = useState<FrontendProject[]>(t('main.frontend.projects', {returnObjects: true}))

    const handleClickItem = (index: number) => {
        if (projects[index].type !== 'active') return
        const link = projects[index].url ?? 'https://juniorsergio.github.io/' + projects[index].id
        window.open(link, "_blank")
    }

    const setElementHeight = (index: number) => {
        const selected = document.getElementById(projects[index].id)
        const height = selected?.offsetHeight
        if (!height) return

        const carouselElement = document.querySelector('.carousel-slider') as HTMLElement
        carouselElement.style.height = height.toString() + 'px'
    }

    useEffect(() => {
        const promises = projects.map(async (project) => {
            let image = await import(`../../assets/images/${project.id}.png`)
            project.image = image.default
            return project
        })
        Promise.all(promises).then(p => setProjects(p))
    }, [])
    
    return (
        <Container>
            <Markup tagName='p' content={t('main.frontend.opening')} />
            <Carousel
                swipeable
                emulateTouch
                infiniteLoop
                onClickItem={handleClickItem}
                onChange={setElementHeight}
                showIndicators={false}
                showStatus={false}        
            >
                {projects.map((project) => (
                    <figure id={project.id} className={project.type} key={project.id}>
                        <figcaption>
                            <div className='projectStacks'>
                                {project.stacks.map((stack) => (
                                    <span key={stack}>{stack}</span>
                                ))}
                            </div>
                        </figcaption>
                        <img src={project.image} />
                        <figcaption>
                            <h2>{project.title}</h2>
                            <Markup
                                tagName='p'
                                content={project.type === 'active' ? project.description : t('main.frontend.soon')}
                            />
                        </figcaption>
                    </figure>
                ))}
            </Carousel>
        </Container>
    )
}