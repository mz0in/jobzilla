import Categories from '@/components/inicio/Categories'
// import Companies from '@/components/inicio/Companies'
import Hero from '@/components/inicio/Hero'
import JobsCategories from '@/components/inicio/JobsCategories'

export default function Home () {
	return (
		<>
			<Hero />
			<Categories />
			<JobsCategories />
			{/* <Companies /> */}
		</>
	)
}
