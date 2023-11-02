export default class JobData {
	private _jobTitle: string | null;
	private _company: string | null;
	private _jobLocation: string | null;
	private _jobLocationTypes: string[];
	private _employmentTypes: string[];
	private _compensation: string | null;
	private _id: string;

	constructor(
		jobTitle: string | null = null,
		company: string | null = null,
		jobLocation: string | null = null,
		jobLocationTypes: string[] = [],
		employmentTypes: string[] = [],
		compensation: string | null = null,
		id: string = ''
	) {
		this._jobTitle = jobTitle;
		this._company = company;
		this._jobLocation = jobLocation;
		this._jobLocationTypes = jobLocationTypes;
		this._employmentTypes = employmentTypes;
		this._compensation = compensation;
		this._id = id;
	}

	// Getters
	get jobTitle(): string | null {
		return this._jobTitle;
	}

	get company(): string | null {
		return this._company;
	}

	get jobLocation(): string | null {
		return this._jobLocation;
	}

	get jobLocationTypes(): string[] {
		return this._jobLocationTypes;
	}

	get employmentTypes(): string[] {
		return this._employmentTypes;
	}

	get compensation(): string | null {
		return this._compensation;
	}

	get id(): string {
		return this._id;
	}

	// Setters
	set jobTitle(value: string | null) {
		this._jobTitle = value;
	}

	set company(value: string | null) {
		this._company = value;
	}

	set jobLocation(value: string | null) {
		this._jobLocation = value;
	}

	set jobLocationTypes(value: string[]) {
		this._jobLocationTypes = value;
	}

	set employmentTypes(value: string[]) {
		this._employmentTypes = value;
	}

	set compensation(value: string | null) {
		this._compensation = value;
	}

	set id(value: string) {
		this._id = value;
	}

	// toString() method
	toString(): string {
		return `
		Job Title: ${this._jobTitle},
		Company: ${this._company}, 
		Job Location: ${this._jobLocation}, 
		Job Location Types: [${this._jobLocationTypes.join(', ')}], 
		Employment Types: [${this._employmentTypes.join(', ')}], 
		Compensation: ${this._compensation},
		Id: ${this._id}
		`;
	}
}
