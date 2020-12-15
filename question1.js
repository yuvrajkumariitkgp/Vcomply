function isSlotAvailable( approvedLeaves , requestedLeave ){
	const {leaveFrom, leaveUpto} = requestedLeave;

	let d1 = dateFrom.split("-");
	let d2 = dateTo.split("-");
	let from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
	let to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);

	for(let i=0;i<approvedLeaves.length;i++){
		const {leaveFrom, leaveUpto} = approvedLeaves[i];
		let ad1 = leaveUpto.split("-");
		let ad2 = dateTo.split("-");
		let approvedfrom = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
		let approvedto   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);


		if((approvedfrom > from && approvedfrom < to) || (approvedto > from && approvedto < to)){
			return false;
		}
	}
	return true;
}