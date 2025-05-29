import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// --- Redux Setup ---

const ADD_PERSON = "ADD";
const REMOVE_PERSON = "REMOVE";

const addPerson = (personData) => ({ type: ADD_PERSON, personData });
const removePerson = (id) => ({ type: REMOVE_PERSON, personId: id });

const initialState = { persons: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, persons: [...state.persons, action.personData] };
    case REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((p) => p.id !== action.personId),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// --- Styles ---

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#121212",
    color: "#c3d9c1", // sage green text
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // vertically center if content is small, else scroll
    justifyContent: "flex-start",
  },
  header: {
    fontWeight: "700",
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    color: "#a3b18a", // lighter sage green
  },
  form: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    width: "100%",
    maxWidth: 500,
  },
  input: {
    flex: 1,
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: 6,
    border: "1.5px solid #4a5d23", // dark sage border
    backgroundColor: "#222",
    color: "#c3d9c1",
  },
  button: {
    backgroundColor: "#a3b18a",
    color: "#121212",
    border: "none",
    padding: "0.5rem 1.2rem",
    borderRadius: 6,
    fontWeight: "600",
    cursor: "pointer",
  },
  personCard: {
    backgroundColor: "#222",
    padding: "1rem 1.2rem",
    borderRadius: 10,
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#c3d9c1",
    maxWidth: 500,
    width: "100%",
  },
  personName: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  ageText: {
    fontSize: "0.9rem",
    color: "#8f9e72",
  },
  smallButton: {
    backgroundColor: "#4a5d23",
    border: "none",
    padding: "0.3rem 0.8rem",
    borderRadius: 6,
    marginLeft: "0.6rem",
    fontSize: "0.9rem",
    cursor: "pointer",
    color: "#c3d9c1",
  },
  removeButton: {
    backgroundColor: "#6f3e3e",
  },
  noPersonsText: {
    color: "#8f9e72",
    fontStyle: "italic",
    maxWidth: 500,
  },
  personWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    maxWidth: 500,
    width: "100%",
  },
};

// --- Components ---

function PersonItem({ person }) {
  const [showAge, setShowAge] = useState(false);

  return (
    <div style={styles.personCard}>
      <div>
        <div style={styles.personName}>{person.name}</div>
        {showAge && <div style={styles.ageText}>Age: {person.age}</div>}
      </div>
      <button
        style={styles.smallButton}
        onClick={() => setShowAge((prev) => !prev)}
      >
        {showAge ? "Hide Age" : "Show Age"}
      </button>
    </div>
  );
}

function AddPersonForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const generateId = () => Math.floor(Math.random() * 10000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim()) {
      alert("Please enter both name and age.");
      return;
    }
    onAdd({ id: generateId(), name: name.trim(), age: Number(age) });
    setName("");
    setAge("");
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        style={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={styles.input}
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button style={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}

function App() {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();

  const handleAddPerson = (person) => dispatch(addPerson(person));
  const handleRemovePerson = (id) => dispatch(removePerson(id));

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Persons List</h1>
      <AddPersonForm onAdd={handleAddPerson} />

      {persons.length === 0 && (
        <p style={styles.noPersonsText}>No persons added yet.</p>
      )}

      {persons.map((person) => (
        <div key={person.id} style={styles.personWrapper}>
          <PersonItem person={person} />
          <button
            style={{ ...styles.smallButton, ...styles.removeButton }}
            onClick={() => handleRemovePerson(person.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

// Root component wrapping with Redux Provider
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
