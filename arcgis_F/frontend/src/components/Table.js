import React from 'react'
import BotBar from './BotBar'

const Table = () => {
  return (
    
<div class="pl-3" style={{height:700 }}>
	<table class="text-left w-full border-t border-l border-r shadow">
		<thead class="bg-gris_cell flex text-white w-full">
			<tr class="flex w-full">
				<th class="p-8 w-1/2">One</th>
				<th class="p-8 w-1/2">Two</th>
			</tr>
		</thead>
		<tbody class="bg-gris_cell flex flex-col items-center justify-between overflow-y-scroll w-full scrollbar-thin scrollbar-thumb-scroll scrollbar-track-gris_gb text-white" style={{height:600 }}>
			<tr class="flex w-full">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
            <tr class="flex w-full border border-gris_gb">
				<td class="p-8 w-1/2">Dogs</td>
				<td class="p-8 w-1/2">Cats</td>
			</tr>
			
		</tbody>
	</table>
	<BotBar/>
</div>
   
  )
}

export default Table