function Repo({repo}){
    return(
        <>
            {repo.map((repo,idx) => (
                <li key={idx} className="bg-gray-400 p-5 text-lg leading-8 hover:bg-red-400">
                    <a href={repo.html_url} target="_blank" className="text-blue-800  break-words font-semibold hover:underline">
                        {repo.full_name}
                    </a>

                    <div className=" flex gap-x-5">
                        <h1 className="text-sm font-semibold"> <span className="h-5"> 🟢</span> {repo.language}</h1>
                        <h1 className="text-sm font-semibold">forks : {repo.forks}</h1>
                        <h1 className="text-sm font-semibold">starts : {repo.stargazers_count}</h1>
                    </div>
                
                </li>
            ))}
        </>
    )
}

export default Repo;