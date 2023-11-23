
// interface Props {
//     id: string;
// }

// const Read = () => {
//     const router = useRouter()
//     const id = router.query
//     return (
//         <>
//             <p>ID:{id}</p>
//         </>
//     );
// };

//export default Read
export default function Page({ params }: { params: { id: string } }) {
    return <div>My Post: {params.id}</div>
}
