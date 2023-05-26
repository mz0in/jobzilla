import Image from 'next/image'
import companies from '@/assets/json/companies.json'

export default function Companies () {
	return (
		<div>
			<h2 className='text-2xl text-center font-semibold my-4'>Empresas</h2>
			<div className='flex gap-4'>
				{companies.map((company, index) => (
					<div key={index} >
						<Image src={company.img} alt={company.name} className='w-32 h-32 object-contain' width={200} height={200} />
						<h4>{company.name}</h4>
						<p>{company.offers} Ofertas</p>
					</div>
				))}
			</div>
		</div>
	)
}