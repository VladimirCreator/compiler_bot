import { useState } from 'react';

import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-tabs";
import * as Switch from "@radix-ui/react-tabs";

import Picker from 'react-mobile-picker';

export default function App() {
    const [languageSelection, setLanguageSelection] = useState(
        {
            language: 'Swift'
        }
    );
    const [inputSelection, setInputSelection] = useState('plain');

    return (
        <>
            <Picker value={languageSelection} onChange={setLanguageSelection}>
                <Picker.Column name={'A Programming Language'}>
                    {
                        ["Swift", "C++", "JavaScript", "TypeScript"].map(
                            (language) => (
                                <Picker.Item key={language} value={language}>
                                    {language}
                                </Picker.Item>
                            )
                        )
                    }
                </Picker.Column>
            </Picker>

            <Tabs.Root>
                <Tabs.List>
                    <Tabs.Trigger value={'plain'} children={ "Plain" } />
                    <Tabs.Trigger value={'file'} children={ "File" } />
                </Tabs.List>

                <Tabs.Content value='plain'>
                    <h1>
                        Иди нахуй
                    </h1>
                </Tabs.Content>

                <Tabs.Content value='file'>
                    <h1>
                        File
                    </h1>
                </Tabs.Content>
            </Tabs.Root>
        </>
    );
}
