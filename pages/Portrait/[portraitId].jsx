import { useRouter } from 'next/router'
import styles from './Portrait.module.css'

export default function Portrait() {
    const router = useRouter();
    const { portraitId } = router.query;

    console.log(portraitId)

    return <>Portrait: {portraitId}</>
}