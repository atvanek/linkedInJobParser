export default class JobData {
	private _jobTitle: string | null;
	private _company: string | null;
	private _jobLocation: string | null;
	private _jobLocationTypes: string[];
	private _compensation: string | null;

	constructor(
		jobTitle: string | null,
		company: string | null,
		jobLocation: string | null,
		jobLocationTypes: string[],
		compensation: string | null
	) {
		this._jobTitle = jobTitle;
		this._company = company;
		this._jobLocation = jobLocation;
		this._jobLocationTypes = jobLocationTypes;
		this._compensation = compensation;
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

	get compensation(): string | null {
		return this._compensation;
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

	set compensation(value: string | null) {
		this._compensation = value;
	}

	// toString() method
	toString(): string {
		return `Job Title: ${this._jobTitle},
		Company: ${this._company}, Job Location: ${
			this._jobLocation
		}, Job Location Types: [${this._jobLocationTypes.join(
			', '
		)}], Compensation: ${this._compensation}`;
	}
}
